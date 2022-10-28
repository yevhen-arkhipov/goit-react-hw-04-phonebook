import styled from 'styled-components';

export const DataForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: bold;

  &:not(:last-of-type) {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const Input = styled.input`
  margin-top: 5px;
  width: 230px;
  height: 20px;
  background-color: ${p => p.theme.colors.bodyColor};
  box-shadow: ${p => p.theme.shadows.outline};
  border-color: transparent;
  border-radius: 2px;
`;

export const Button = styled.button`
  margin-top: 30px;
  padding-top: ${p => p.theme.space[0]}px;
  padding-right: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[1]}px;
  width: 238px;
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: bold;
  background-color: ${p => p.theme.colors.secondBtnColor};
  color: ${p => p.theme.colors.secondText};
  border-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.btnColor};
    color: ${p => p.theme.colors.text};
    box-shadow: ${p => p.theme.shadows.outline};
  }
`;
