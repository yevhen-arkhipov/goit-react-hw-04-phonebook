import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: bold;
`;

export const Button = styled.button`
  margin-left: ${p => p.theme.space[0]}px;
  // margin-top: 30px;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${p => p.theme.colors.secondBtnColor};
  color: ${p => p.theme.colors.secondText};
  border-color: transparent;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.btnColor};
    color: ${p => p.theme.colors.text};
    box-shadow: ${p => p.theme.shadows.outline};
  }
`;
