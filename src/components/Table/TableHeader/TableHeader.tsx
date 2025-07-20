import React from 'react';
import type { TableHeaderProps } from './TableHeader.types';
import styled from 'styled-components';

const StyledThead = styled.thead`
  background-color: #f0f0f0;
`;

const StyledTh = styled.th<{ disabled?: boolean }>`
  padding: 8px;
  border: 1px solid #ddd;
  color: ${({ disabled }) => (disabled ? '#999' : 'inherit')};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : 'inherit')};
`;

const TableHeader = ({ children, disabled, className }: TableHeaderProps) => {
  return (
    <StyledThead className={className}>
      <tr>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const element = child as React.ReactElement<React.PropsWithChildren<{ disabled?: boolean }>>;
            return <StyledTh disabled={disabled}>{element.props.children}</StyledTh>;
          }
          return <StyledTh disabled={disabled}>{child}</StyledTh>;
        })}
      </tr>
    </StyledThead>
  );
};

export default TableHeader;
