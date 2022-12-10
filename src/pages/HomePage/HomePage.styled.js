import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 50px;
  width: 100vw;
  height: 100vw;
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  display: block;

  color: ${p => p.theme.colors.primary};
  line-height: ${p => p.theme.lineHeights.heading};
  text-shadow: ${p => p.theme.shadowBorders.bold} ${p => p.theme.colors.muted};
`;

export const SmallSubTitle = styled.p`
  position: absolute;

  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const UserName = styled.span`
  color: ${p => p.theme.colors.accent};
`;

export const TitleProduct = styled.span`
  position: absolute;
  top: 5vw;
  left: 5vw;

  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xxxl};
`;

export const BigSubTitle = styled.span`
  position: absolute;
  top: 15vw;
  left: 15vw;

  font-size: ${p => p.theme.fontSizes.xxxl};
`;

export const Slogan = styled.p`
  position: absolute;
  top: 25vw;
  left: 5vw;
  padding: 10px;

  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  text-shadow: ${p => p.theme.shadowBorders.normal} ${p => p.theme.colors.muted};
  &::before {
    content: '';
    position: absolute;
    top: 63%;
    left: -150px;
    width: 150px;
    height: 4px;
    background-color: ${p => p.theme.colors.accent};
    transform: translateY(-50%);
  }
`;
