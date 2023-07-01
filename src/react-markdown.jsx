import { ReactMarkdown as RM } from "react-markdown/lib/react-markdown";
import styled, { useTheme } from "styled-components";

const ReactMarkdown = ({ children, ...props }) => {
  //   const theme = useTheme();
  return (
    <RM
      components={{
        em: ({ node, ...props }) => <SpanCode {...props} />,
        strong: ({ node, ...props }) => <SpanStrong {...props} />,
      }}
      {...props}
    >
      {children}
    </RM>
  );
};

const SpanCode = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

const SpanStrong = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export default ReactMarkdown;
