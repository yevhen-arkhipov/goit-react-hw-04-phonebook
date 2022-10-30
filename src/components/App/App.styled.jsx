import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  background-color: ${p => p.theme.colors.btnColor};
  box-shadow: ${p => p.theme.shadows.outline};
  border-radius: 5px;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.space[1]}px;
  width: 500px;
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;

export const PhonebookTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: bold;
`;

export const ContactTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: bold;
`;
