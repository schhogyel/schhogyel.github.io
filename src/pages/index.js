import React from "react";
import Link from "gatsby-link";
import styled, { css } from "styled-components";
import Apod from "../components/Apod";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PageTitle = styled.h1`
  color: #3b3738;
  font-size: 7rem;
  margin-top: 1.68rem;
`;
const Title = styled.h3`
  color: #3b3738;
  text-align: center;
  padding: 0.6rem 0;
`;
const Excerpt = styled.p`
  color: #3b3738;
  padding: 1rem;
  line-height: 1.25rem;
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
    <div className="pt-8 mt-8">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="flex flex-col items-center p-2 mb-4">
          <div className="flex flex-col items-center p-2">
            <Title>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </Title>
            <div className="p-2 font-thin"> {node.frontmatter.date}</div>
          </div>

          <Excerpt>{node.excerpt}</Excerpt>
          <Link to={node.fields.slug}>
            <button className="bg-indigo-light hover:bg-indigo-dark text-white font-bold my-4 py-2 px-4 rounded">
              Read More
            </button>
          </Link>
        </div>
      ))}
    </div>
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
