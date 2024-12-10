import { Container, Grid2, Typography } from '@mui/material';
import NeonLogo from '../../../../public/clientLogos/neonLogo';
import ClerkLogo from '../../../../public/clientLogos/clerkLogo';
import { ComponentProps } from 'react';

const ClientSection = () => {
  return (
    <section className="w-screen py-10 bg-gray-950">
      <Container className="container mx-auto">
        <Typography
          variant="h3"
          component="h3"
          fontSize={'2rem'}
          className="font-mono text-center"
          fontWeight={700}
          color="white"
        >
          Trusted by the top modern companies
        </Typography>
      </Container>
      <Container className="container mx-auto mt-10">
        <Grid2
          container
          spacing={5}
          columns={{ xs: 2, sm: 4, md: 5 }}
        >
          {new Array(10).fill(0).map((_, index) => {
            const svgProps: ComponentProps<'svg'> = {
              width: '150px',
              height: 'auto',
              fill: 'white',
            };

            return (
              <Grid2 key={index} size={1}>
                {index % 2 === 0 ? (
                  <ClerkLogo svgProps={svgProps} />
                ) : (
                  <NeonLogo svgProps={svgProps} />
                )}
              </Grid2>
            );
          })}
        </Grid2>
      </Container>
    </section>
  );
};

export default ClientSection;
