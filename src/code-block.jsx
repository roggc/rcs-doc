import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

const CodeBlock = ({ children, language = "javascript", ...props }) => {
  return (
    <CodeBlockContainer>
      <SyntaxHighlighter language={language} style={vscDarkPlus} {...props}>
        {children}
      </SyntaxHighlighter>
    </CodeBlockContainer>
  );
};

const CodeBlockContainer = styled.div``;

export default CodeBlock;
