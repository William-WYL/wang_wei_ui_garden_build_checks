import React from 'react';
import styled from 'styled-components';

export interface HeroImageProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  disabled?: boolean;
}

const Container = styled.div<{ $backgroundImage: string; disabled?: boolean }>`
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
`;

const HeroImage: React.FC<HeroImageProps> = ({ backgroundImage, title, subtitle, disabled }) => {
  return (
    <Container $backgroundImage={backgroundImage} disabled={disabled} data-testid="hero-container">
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
};

export default HeroImage;
