import React from "react";
import styled from "styled-components";

const ArticleTitle = styled.h1`
  margin-top: 0;
  padding: 2rem 0;
`;
const Wrapper = styled.div`
  max-width: 960px;
  padding-top: 71px;
  margin: auto;
`;
const Content = styled.div`
  line-height: 1.75rem;
`;
export default ({ data, transition }) => {
  const post = data.markdownRemark;
  return (
    <Wrapper style={transition && transition.style}>
      <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
      <Content dangerouslySetInnerHTML={{ __html: post.html }} />
    </Wrapper>
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
