import React from "react";
import Link from "gatsby-link";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PageTitle = styled.h1`
  color: #3b3738;
  font-size: 7rem;
`;
const Title = styled.h3`
  color: #3b3738;
  text-align: center;
`;
const Excerpt = styled.p`
  color: #3b3738;
`;
const Date = styled.span`
  display: block;
  color: #d3d3d3;
  font-size: 1rem;
  padding: 1rem 0 0 0;
`;
const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ReadMore = styled.button`
  border-radius: 3px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: #558c89;
  border: 2px solid #558c89;
  ${props =>
    props.primary &&
    css`
      background: #558c89;
      color: white;
    `};
`;

export default ({ data }) => {
  return (
    <Container>
      <PageTitle>Articles</PageTitle>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Article key={node.id}>
          <Title>
            {node.frontmatter.title} <Date> {node.frontmatter.date}</Date>
          </Title>
          <Excerpt>{node.excerpt}</Excerpt>
          <Link to={node.fields.slug}>
            <ReadMore primary>Read More</ReadMore>
          </Link>
        </Article>
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
          excerpt(pruneLength: 500)
        }
      }
    }
  }
`;
