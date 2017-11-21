import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const PageTitle = styled.h1`
  font-size: 1.2rem;
  color: #3b3738;
`;
const Title = styled.h3`
  font-size: 1rem;
  color: #3b3738;
`;
const Excerpt = styled.p`
  font-size: 0.9rem;
  color: #3b3738;
`;

export default ({ data }) => {
  return (
    <Container>
      <PageTitle>Articles</PageTitle>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <Title>
              {node.frontmatter.title} <span> {node.frontmatter.date}</span>
            </Title>
            <Excerpt>{node.excerpt}</Excerpt>
          </Link>
        </div>
      ))}
    </Container>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
