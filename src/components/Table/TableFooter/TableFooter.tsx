import React from 'react';
import type { TableFooterProps } from './TableFooter.types';
import styled from 'styled-components';

const StyledTfoot = styled.tfoot`
  background-color: #f9f9f9;
`;

const StyledTd = styled.td<{ disabled?: boolean }>`
  padding: 8px;
  border: 1px solid #ddd;
  color: ${({ disabled }) => (disabled ? '#999' : 'inherit')};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : 'inherit')};
`;

const TableFooter = ({ children, disabled, className }: TableFooterProps) => {
  return (
    <StyledTfoot className={className}>
      <tr>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const element = child as React.ReactElement<any>;
            return <StyledTd disabled={disabled}>{element.props.children}</StyledTd>;
          }
          return <StyledTd disabled={disabled}>{child}</StyledTd>;
        })}
      </tr>
    </StyledTfoot>
  );
};

export default TableFooter;
