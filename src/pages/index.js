import React from "react";
import Link from "gatsby-link";
import styled, { css } from "styled-components";
import Apod from "../components/Apod";
import TiTime from "react-icons/lib/md/access-time";
import Loader from "react-loader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const PageTitle = styled.h1`
  color: #3b3738;
  font-size: 7rem;
  margin-top: 1.68rem;
`;
const Title = styled.h3`
  color: #3b3738;
  padding: 0.6rem 0;
  line-height: 1.25rem;
`;
const Excerpt = styled.p`
  color: #3b3738;
  padding: 1rem 0;
  line-height: 1.75rem;
`;
const Date = styled.span`
  display: block;
  color: #d3d3d3;
  font-size: 1rem 0;
  padding: 1rem 0 0 0;
`;
const Article = styled.div`
  display: flex;
  flex-direction: column;
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

export default ({ data, transition }) => {
  return (
    <div style={transition && transition.style}>
      <Apod />
      <div className="container mx-auto">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="flex">
            <div className="flex-auto px-4" style={{ minWidth: "200px" }} />
            <div className="flex flex-col p-2 mb-4">
              <Title>
                <Link
                  to={node.fields.slug}
                  className="hover:no-underline text-black hover:text-red-light"
                >
                  {node.frontmatter.title}
                </Link>
              </Title>
              <div className="flex">
                <div className="flex flex-auto flex-col">
                  <Excerpt>
                    <span className="uppercase text-xs text-grey tracking-wide font-hairline">
                      {node.frontmatter.date} -
                    </span>
                    {node.excerpt}
                  </Excerpt>
                  <Link to={node.fields.slug}>
                    <button className="underline text-indigo-light font-sans font-bold my-3">
                      Read More...
                    </button>
                  </Link>
                </div>
                <div className="flex-auto p-4 " style={{ minWidth: "200px" }}>
                  <TiTime className="text-red-light" />
                  <span className="text-grey text-xs pl-2">
                    {node.timeToRead} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
          excerpt(pruneLength: 300)
          timeToRead
        }
      }
    }
  }
`;
