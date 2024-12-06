import { ArrowForward } from '@mui/icons-material';
import { Button, Container, Stack, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-var(--header-height))] bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))60%)] container">
      <Stack
        height={'100%'}
        alignContent={'center'}
        justifyContent={'center'}
        gap={4}
      >
        <Typography
          variant="h1"
          component="h1"
          className="text-center "
          fontWeight={700}
        >
          Price Smarter, Sell bigger!
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className="text-center text-balance"
          fontWeight={600}
          fontSize={22}
          color="textPrimary"
        >
          Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic pricing
        </Typography>
        <Stack
          justifyContent={'center'}
          gap={2}
          direction={'row'}
          alignItems={'center'}
        >
          <Button
            variant="contained"
            size="large"
            color="secondary"
            LinkComponent={'button'}
          >
            Get Started
          </Button>
          <Button
            variant="contained"
            size="large"
            className="text-black bg-white border-2 border-black rounded"
            endIcon={<ArrowForward />}
          >
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeroSection;
