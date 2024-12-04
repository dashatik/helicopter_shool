const fs = require('fs');
const { glob } = require('glob');
const path = require('path');

const fixes = {
  // Fix kebab-case class names
  fixClassNames: (content) => {
    return content.replace(/\.[a-zA-Z]+([A-Z][a-zA-Z]+)+/g, (match) => {
      return match.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    });
  },
  
  // Fix keyframe names
  fixKeyframeNames: (content) => {
    return content.replace(/@keyframes\s+([a-zA-Z]+[A-Z][a-zA-Z]*)/g, (match, name) => {
      return `@keyframes ${name.replace(/[A-Z]/g, '-$&').toLowerCase()}`;
    });
  },
  
  // Remove double-slash comments
  removeDoubleSlashComments: (content) => {
    return content.replace(/\/\/[^\n]*/g, '');
  },
  
  // Fix invalid properties
  fixInvalidProperties: (content) => {
    return content.replace(/border-image-radius/g, 'border-radius');
  },
  
  // Fix unclosed URLs
  fixUnclosedUrls: (content) => {
    // Step 1: Fix all malformed background-image declarations
    content = content.replace(
      /background-image:\s*(?:linear-gradient\([^)]+\),\s*)?url\(['"]*[^)]*['"]*\)?[";)]*(?:https)?[";)]*/g,
      (match) => {
        if (match.includes('linear-gradient')) {
          return match.replace(/url\(['"]*[^)]*['"]*\)?[";)]*(?:https)?[";)]*/g, 'url("")');
        }
        return 'background-image: url("")';
      }
    );
    
    // Step 2: Clean up any remaining malformed URLs
    content = content.replace(/url\(['"]*[^)]*['"]*\)?[";)]*(?:https)?[";)]*/g, 'url("")');
    
    // Step 3: Ensure proper semicolons after declarations
    content = content.replace(/url\(['"][^'"]*['"]\)(?!;)/g, match => `${match};`);
    
    return content;
  },
  
  // Fix malformed linear gradients
  fixLinearGradients: (content) => {
    // Fix rgb values in gradients
    content = content.replace(
      /linear-gradient\([^)]*?rgb\([^)]+?\)[^)]*?\)/g,
      match => match.replace(/\/{1,2}|;+|\)+$/g, ')')
    );

    // Fix basic gradients with color values
    content = content.replace(
      /linear-gradient\((to .+?|[0-9]+deg),\s*[^;]+?\)?[;,\s]*$/gm,
      match => {
        // Remove extra characters
        match = match.replace(/[,;]\s*$/, '');
        // Ensure proper closing
        if (!match.endsWith(')')) {
          match += ')';
        }
        return match + ';';
      }
    );

    // Clean up any remaining issues
    content = content.replace(/\){2,}/g, ')') // Remove multiple closing parentheses
             .replace(/;{2,}/g, ';') // Remove multiple semicolons
             .replace(/\s+/g, ' '); // Normalize whitespace
    
    return content;
  },
  
  // Fix malformed grid properties
  fixGridProperties: (content) => {
    // Fix repeat() functions in grid templates
    content = content.replace(
      /grid-template-(?:columns|rows):\s*repeat\([^)]+(?!\))/g,
      match => {
        // Ensure proper closing parenthesis
        if (!match.endsWith(')')) {
          return match + ')';
        }
        return match;
      }
    );
    
    // Fix minmax() functions
    content = content.replace(
      /minmax\([^)]+(?!\))/g,
      match => {
        // Clean up and close minmax properly
        match = match.replace(/[,\s]+$/, '');
        if (!match.endsWith(')')) {
          return match + ')';
        }
        return match;
      }
    );
    
    return content;
  },
  
  // Fix malformed declarations
  fixMalformedDeclarations: (content) => {
    // Fix !important declarations
    content = content.replace(
      /!\s*important[^;]*/g,
      '!important'
    );
    
    // Fix extra parentheses and semicolons
    content = content.replace(
      /\)+\s*!important\)*;*/g,
      ') !important;'
    );
    
    // Clean up any remaining issues
    content = content
      .replace(/;{2,}/g, ';')  // Remove multiple semicolons
      .replace(/\){2,}/g, ')') // Remove multiple closing parentheses
      .replace(/\s+/g, ' ');   // Normalize whitespace
    
    return content;
  },
  
  // Ultimate CSS syntax fixer
  fixAllSyntax: (content) => {
    // Step 1: Fix encoding and basic cleanup
    content = content
      .replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width spaces
      .replace(/\s+/g, ' ')                   // Normalize all whitespace
      .replace(/\s*([{};:,])\s*/g, '$1 ')     // Fix spacing around punctuation
      .trim();

    // Step 2: Parse and fix rules
    const fixRule = (rule) => {
      if (!rule.includes('{')) return '';
      
      const [selector, body = ''] = rule.split('{');
      const declarations = body.replace(/}$/, '').split(';');
      
      const fixedDeclarations = declarations
        .map(decl => {
          if (!decl.includes(':')) return '';
          
          const [prop, ...valueParts] = decl.split(':');
          const value = valueParts.join(':').trim();
          
          // Handle font-family specially
          if (prop.trim() === 'font-family') {
            const fonts = value
              .split(/[,\s]+/)
              .map(font => {
                font = font.trim().replace(/["']/g, '');
                return /^(serif|sans-serif|monospace|cursive|fantasy|system-ui)$/.test(font)
                  ? font 
                  : `"${font}"`;
              })
              .filter(Boolean);
            return fonts.length ? `font-family: ${fonts.join(', ')}` : '';
          }

          // Handle all other properties
          let cleanValue = value
            .replace(/\s+/g, ' ')
            .replace(/\s*!\s*important/g, ' !important')
            .trim();

          // Fix function calls
          cleanValue = cleanValue.replace(
            /(\w+)\s*\(([^)]*)\)/g, 
            (_, fn, args) => `${fn}(${args.trim()})`
          );

          return cleanValue ? `${prop.trim()}: ${cleanValue}` : '';
        })
        .filter(Boolean);

      return fixedDeclarations.length 
        ? `${selector.trim()} { ${fixedDeclarations.join('; ')}; }`
        : '';
    };

    // Step 3: Process all rules
    const rules = content.split(/(?=\s*[^{]+\s*{)/g);
    const fixedRules = rules
      .map(fixRule)
      .filter(Boolean);

    // Step 4: Final cleanup
    return fixedRules
      .join('\n')
      .replace(/\s+/g, ' ')
      .replace(/;\s*}/g, '; }')
      .replace(/\s*{\s*/g, ' { ')
      .replace(/\s*}\s*/g, ' } ')
      .trim();
  }
};

// Main processing function
const processFile = (content) => {
  return fixes.fixAllSyntax(content);
};

// Get all CSS files using async/await
async function fixCssFiles() {
  try {
    const files = await glob('src/**/*.css');
    
    files.forEach(file => {
      console.log('Processing:', file);
      let content = fs.readFileSync(file, 'utf8');
      content = processFile(content);
      fs.writeFileSync(file, content);
      console.log('Fixed:', file);
    });
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

fixCssFiles();