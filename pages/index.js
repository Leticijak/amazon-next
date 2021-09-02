import Layout from '../components/Layout'
import {
  Card,
  CardActionArea,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'
import data from '../utils/data'
import NextLink from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((p) => (
            <Grid item md={4} key={p.name}>
              <Card>
                <NextLink href={`/product/${p.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={p.image}
                      title={p.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{p.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${p.price}</Typography>
                  <Button size="small" variant="contained" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}
