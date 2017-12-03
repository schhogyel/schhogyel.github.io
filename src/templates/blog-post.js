import React from "react";
import styled from "styled-components";

const ArticleTitle = styled.h1`
  margin-top: 0;
  padding: 2rem 0;
`;
export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div style={{ marginTop: "71px" }}>
      <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
