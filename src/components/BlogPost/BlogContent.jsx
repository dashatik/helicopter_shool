import React from 'react';

const BlogContent = () => {
  return (
    <article className="blog-content-blog-post">
      <h2>Course Details</h2>
      <p>Helicopters come to the rescue when extreme weather stops cars and trains. But who will pilot the helicopters in the future? Now several flight academies are warning of poor recruitment figures.</p>
      <p>This week, the Nordic Labour Journal (published by the Nordic Council of Ministers) wrote several articles about preparedness in the Nordic region. Here you can read how crucial it is to train an adequate number of qualified pilots to carry out the critical societal missions.</p>
      <hr className="divider" />
      <p>The leader of the Norwegian Pilots' Union, Carl Gilbert Rego is worried. He works on a civil search and rescue helicopter in Norway.</p>
      <p>Right now, it is difficult to find qualified pilots. At the same time, private helicopter operators must be prepared to carry out important tasks for civil society more often than before. We see an increasing need for emergency action. Extreme weather "Hans" was a good example of this. The conflict in Ukraine has also put preparedness on the agenda.</p>
      <figure>
        <blockquote cite="Carl Gilberg Rego">
          <p>Carl Gilberg Rego, leader of Norwegian Pilots Union</p>
        </blockquote>
      </figure>
      <figure>
        <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/3cb261788d60928e65f85cb466a6425cc51e8b0e5508cab19c9c0c745038c382?apiKey=536a8b606864400fab194975c3b1e353&" alt="Helicopter in action" className="content-image-blog-post" />
        <figcaption>the 27. September 2023</figcaption>
      </figure>
      <p>The pilots' union leader believes the first thing that needs fixing is a proper loan system for those who want to attend EHC, to make the training more affordable.</p>
      <p><strong>"This needs to happen very soon. It's urgent," says Rego.</strong></p>
      <blockquote>
        <p>Who will rescue us in the future if there aren't enough helicopter pilots being trained? The image is borrowed and used with permission from the Norwegian Air Ambulance.</p>
      </blockquote>
    </article>
  );
};

export default BlogContent;