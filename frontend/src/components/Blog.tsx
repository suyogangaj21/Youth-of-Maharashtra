
import styled from 'styled-components';

// Styled components for the Blog component
const Section = styled.section`
  background-color: #ffffff;
  padding: 2rem 0;
  width:100%;

  @media (min-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`;

const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 75rem;
  margin: 0 auto;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const Content = styled.div`
  max-width: 45rem;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1a202c;
  font-family: 'Inter', sans-serif;
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #4a5568;
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;


const BlogItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${BlogItem}:hover & {
    transform: scale(1.05);
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  font-family: 'Inter', sans-serif;
  margin-top: 1rem;
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #4a5568;
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  margin-top: 1rem;
`;

const Testimonial = styled.p`
  font-size: 1rem;
  color: #4a5568;
  font-family: 'Inter', sans-serif;
  margin-top: 1rem;
`;

const BlogLink = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  opacity: 0;
`;

const blogs = [
  {
    imageUrl: 'https://imgs.search.brave.com/wxcgVWzaNjFvGkCIpaXYos94Aiv9HotXNKyi1vfiltc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzE4LzgxLzM4/LzM2MF9GXzIxODgx/MzgyNl9melBkTER3/T1kyV3JOVlRCYVB5/Y3VyS2NGVERxUTRm/dy5qcGc',
    date: 'November 22, 2021',
    title: 'How To Optimize Progressive Web Apps: Going Beyond The Basics',
    description: 'Learn advanced techniques to optimize your PWA for better performance and user experience.',
    link: '#',
    testimonial: 'This blog helped us improve our website performance significantly!'
  },
  {
    imageUrl: 'https://imgs.search.brave.com/Fmj2RSdNBqkHYxbZBbDGHjvMk-DHgtzZbnj_vGfevXo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MTc0NzUxNi9waG90/by9jaGVsc2VhLXUy/MS11bnZlaWwtbmV3/LWhlYWQtY29hY2gt/ZmlsaXBlLWNvZWxo/by5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZlZSNXd4clVN/N29ZR2NadGFzVTBW/YjVZTE5pOEJrV1Mx/bFhCdFRTRy1WRT0',
    date: 'November 16, 2021',
    title: 'How To Optimize Progressive Web Apps: Going Beyond The Basics',
    description: 'Implement best practices to enhance the loading speed and responsiveness of your PWA.',
    link: '#',
    testimonial: 'Implementing the tips from this blog boosted our mobile loading speed.'
  },
  {
    imageUrl: 'https://imgs.search.brave.com/tLuu0RJZ_Jwc-P6eNrGJopJ8hQNbJ9twWDne09CEtlY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzc4LzQyLzc2/LzM2MF9GXzI3ODQy/NzY4M196ZVM5aWhQ/QU82MVFoSHFkVTFm/T2FQazJVQ2xmZ1Bj/Vy5qcGc',
    date: 'November 22, 2021',
    title: 'How To Optimize Progressive Web Apps: Going Beyond The Basics',
    description: 'Learn advanced techniques to optimize your PWA for better performance and user experience.',
    link: '#',
    testimonial: 'This blog helped us improve our website performance significantly!'
  },
  {
    imageUrl: 'https://imgs.search.brave.com/4DkVycxreJHOItfZZL-XpIybPSlYJXRNVYFq8IZAGko/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MS8yOS8wMy81My9h/dGhsZXRlcy0xODY3/MTg1XzY0MC5qcGc',
    date: 'November 16, 2021',
    title: 'How To Optimize Progressive Web Apps: Going Beyond The Basics',
    description: 'Implement best practices to enhance the loading speed and responsiveness of your PWA.',
    link: '#',
    testimonial: 'Implementing the tips from this blog boosted our mobile loading speed.'
  },
  {
    imageUrl: 'https://imgs.search.brave.com/JqJGsUEk0t7lDD19wyF80ultLTGAJGAaL6IOqYJuttg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzE2Lzk3LzQy/LzM2MF9GXzcxNjk3/NDI4OF9PWW1OSW1h/RnhUWHlCT1FqeGxx/ZTZUZjc5Rlh1Mkh4/OC5qcGc',
    date: 'November 22, 2021',
    title: 'How To Optimize Progressive Web Apps: Going Beyond The Basics',
    description: 'Learn advanced techniques to optimize your PWA for better performance and user experience.',
    link: '#',
    testimonial: 'This blog helped us improve our website performance significantly!'
  },
  {
    imageUrl: 'https://imgs.search.brave.com/NHLQU8IFfrNXx4hwm-ukl6XhEa6txESOTDOj4kJv1gA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubHRrY29udGVu/dC5jb20vaW1hZ2Vz/LzkxMzIyNS9Db21t/b24tRXhhbXBsZXMt/b2YtU29jaWFsLUlz/c3Vlc18yYjFhYzk2/ZjI4LmpwZw',
    date: 'November 16, 2021',
    title: 'How To Optimize Progressive Web Apps: Going Beyond The Basics',
    description: 'Implement best practices to enhance the loading speed and responsiveness of your PWA.',
    link: '#',
    testimonial: 'Implementing the tips from this blog boosted our mobile loading speed.'
  },
  {
    imageUrl: 'https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-1.png',
    date: 'November 22, 2021',
    title: 'How To Optimize Progressive Web Apps: Going Beyond The Basics',
    description: 'Learn advanced techniques to optimize your PWA for better performance and user experience.',
    link: '#',
    testimonial: 'This blog helped us improve our website performance significantly!'
  },
  {
    imageUrl: 'https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-2.png',
    date: 'November 16, 2021',
    title: 'How To Optimize Progressive Web Apps: Going Beyond The Basics',
    description: 'Implement best practices to enhance the loading speed and responsiveness of your PWA.',
    link: '#',
    testimonial: 'Implementing the tips from this blog boosted our mobile loading speed.'
  },
  // Add more blogs as needed
];

const Blog = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Title>Voices of Youth</Title>
          <Description>
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </Description>
        </Content>

        <Grid>
          {blogs.map((blog, index) => (
            <BlogItem key={index}>
              <BlogImage src={blog.imageUrl} alt={`Blog image ${index + 1}`} />
              <BlogContent>
                <BlogTitle>{blog.title}</BlogTitle>
                <DescriptionText>{blog.description}</DescriptionText>
                <Testimonial>{blog.testimonial}</Testimonial>
                <BlogLink href={blog.link} title="Read more">
                  <span aria-hidden="true"></span>
                </BlogLink>
              </BlogContent>
            </BlogItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default Blog;
