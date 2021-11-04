import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const data = [
  { id: 1, name: 'Flowery' },
  { id: 2, name: 'Forest' },
  { id: 3, name: 'Light' },
  { id: 4, name: 'Dark' },
  { id: 5, name: 'Pastel' },
  { id: 6, name: 'Cityscape' },
  { id: 7, name: 'Nature' },
  { id: 8, name: 'Holographic' },
  { id: 9, name: 'Modern' },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;
  const stepNumber = 3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + stepNumber);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - stepNumber);
  };

  return (
    <CarouselContainer>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <MobileStepper
          variant=""
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={(
            <>
              <RightButton>
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 5}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              </RightButton>

              <Paper
                elevation={0}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: 70,
                  order: 2,
                }}
              >

                {' '}
                <Typography>
                  <ThemesLink href={`/themes/${data.id}`}>
                    {data[activeStep].name}
                    {' '}

                  </ThemesLink>
                  {' '}
                  <ThemesLink href={`/themes/${data.id}`}>
                    {data[activeStep + 1].name}
                    {' '}
                  </ThemesLink>
                  <ThemesLink href={`/themes/${data.id}`}>
                    {data[activeStep + 2].name}

                  </ThemesLink>
                  {' '}

                </Typography>

              </Paper>

            </>
        )}
          backButton={(
            <>
              <LeftButton>
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              </LeftButton>
            </>
        )}
        />
      </Box>
    </CarouselContainer>
  );
}

export default SwipeableTextMobileStepper;

const CarouselContainer = styled.div`
display: flex;
justify-content: center;
padding-bottom: 1em;
padding-top: 1em;
@media screen and (min-width: 768px) {
    display:none
   }
`;

const RightButton = styled.div`
display: flex;
order: 3;
`;

const LeftButton = styled.div`
display: flex;
order: 1;
`;

const ThemesLink = styled.a`
`;
