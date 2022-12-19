import styled from 'styled-components';

export const FilterWrapper = styled.div`
  //
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: bold;
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const Input = styled.input`
  margin-top: 5px;
  width: 230px;
  height: 28px;
  background-color: ${p => p.theme.colors.bodyColor};
  box-shadow: ${p => p.theme.shadows.outline};
  border-color: transparent;
  border-radius: 2px;
`;
