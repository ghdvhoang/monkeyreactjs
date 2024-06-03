import { Box, Stack, Typography } from '@mui/material'
import content from '@/assets/image/content.png'

function Content() {
  return (
    <Stack
      sx ={{
        maxWidth: { xs: '100%', sm: 500, md: 900 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        gap: '35px',
        fontSize: { xs: '16px', sm: '18px', md: '20px' }
      }}>
      <Typography variant="h1" color="rgba(35, 35, 35, 1)">
        Chương 1
      </Typography>
      <Typography>Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw platter will meld. Thick Skewers skillet natural, smoker soy sauce wait roux. slices rosette bone-in simmer precision alongside baby leeks. Crafting renders aromatic enjoyment, then slices taco. Minutes undisturbed cuisine lunch magnificent mustard curry. Juicy share baking sheet pork. Meals ramen rarities selection, raw pastries richness magnificent atmosphere. Sweet soften dinners, cover mustard infused skillet, Skewers on culinary experience.
      </Typography>
      <Typography>Juicy meatballs brisket slammin baked shoulder. Juicy smoker soy sauce burgers brisket. polenta mustard hunk greens. Wine technique snack skewers chuck excess. Oil heat slowly. slices natural delicious, set aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften edges frond slices onion snack pork steem on wines excess technique cup; Cover smoker soy sauce fruit snack. Sweet one-dozen scrape delicious, non sheet raw crunch mustard. Minutes clever slotted tongs scrape, brown steem undisturbed rice.</Typography>
      <Typography>Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. One-pot low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder. Delicious butternut squash hunk. Flavor centerpiece plate, delicious ribs bone-in meat, excess chef end. sweet effortlessly pork, low heat smoker soy sauce flavor meat, rice fruit fruit. Romantic fall-off-the-bone butternut chuck rice burgers.</Typography>
      <Stack>
        <Box
          component="img"
          src={ content }
          alt="Blog Image"
          sx={{
            maxWidth:  { xs: '85%', sm: '90%', md: '100%' },
            height: 'auto',
            borderRadius: '20px'
          }}
        />
        <Typography align="center" color="rgba(107, 107, 107, 1)">Gastronomy atmosphere set aside. Slice butternut cooking home.</Typography>
      </Stack>
      <Typography variant="h1" color="rgba(35, 35, 35, 1)">
        Chương 2
      </Typography>
      <Typography>Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw platter will meld. Thick Skewers skillet natural, smoker soy sauce wait roux. slices rosette bone-in simmer precision alongside baby leeks. Crafting renders aromatic enjoyment, then slices taco. Minutes undisturbed cuisine lunch magnificent mustard curry. Juicy share baking sheet pork. Meals ramen rarities selection, raw pastries richness magnificent atmosphere. Sweet soften dinners, cover mustard infused skillet, Skewers on culinary experience.</Typography>
      <Typography>Juicy meatballs brisket slammin baked shoulder. Juicy smoker soy sauce burgers brisket. polenta mustard hunk greens. Wine technique snack skewers chuck excess. Oil heat slowly. slices natural delicious, set aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften edges frond slices onion snack pork steem on wines excess technique cup; Cover smoker soy sauce fruit snack. Sweet one-dozen scrape delicious, non sheet raw crunch mustard. Minutes clever slotted tongs scrape, brown steem undisturbed rice.</Typography>
    </Stack>
  )
}

export default Content
