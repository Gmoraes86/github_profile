import { Grid, GridItem, Container } from '@chakra-ui/react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const Apllication = () => {
  return (
    <Grid
      templateAreas={`"header"
                  "main"`}
      gridTemplateRows={'50px 1fr'}
      gap="1"
      color="blackAlpha.700"
    >
      <GridItem p={2} area={'header'}>
        <Header />
      </GridItem>
      <GridItem area={'main'}>
        <Container maxW="1000px" p={2}>
          <Outlet />
        </Container>
      </GridItem>
    </Grid>
  );
};

export default Apllication;
