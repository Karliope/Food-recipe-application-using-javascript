const foods = [
  {
    id: 0,
    food: "Kales",
    recipe: ` Step 1
      Soak kale leaves in a large bowl of water until dirt and sand begin to fall to the bottom, about 2 minutes. Lift kale from the bowl without drying the leaves and immediately remove and discard stems. Chop the kale leaves into 1-inch pieces.
      Step 2
      Heat olive oil in a large skillet over medium heat; cook and stir garlic until sizzling, about 1 minute. Add kale to the skillet and place a cover over the top.
      Step 3
      Cook, stirring occasionally with tongs, until kale is bright green and slightly tender, 5 to 7 minutes.
      `,
    src: "/Images/kales.jpeg",
  },
  {
    id: 1,
    food: "Cabbages",
    recipe: `Remove any tattered or bruised outer leaves.
      Cut the cabbage into quarters, and then cut out the core.
      Slice the cabbage quarters into thin shreds. 
      You can hand shred with a knife, use a mandoline or use your food processor shredding attachment.`,
    src: "/Images/cabbage.jpeg",
  },
  {
    id: 2,
    food: "Rice",
    recipe: `
      To wash away excess starch, measure rice into a pot and pour in enough cold water to cover the grains. Gently swish the rice with your fingers and rub lightly. Pour out the starchy water (you can pour through a sieve so you don't lose any grains). Repeat 1 or 2 times, depending on how starchy the rice is. The water does not have to be completely clear after the final wash.
      After pouring out the water for the last time, add clean water to the pot (add 1-1/2 to 2 cups of water for 1 cup rice).
      Cover the pot and bring to a boil, then turn down the heat to its lowest setting. Let the rice gently simmer for 18 to 20 minutes.
      Remove the pot from the heat and let the rice continue to steam in the covered pot for 5 minutes.
  `,
    src: "/Images/rice.jpeg",
  },
  {
    id: 3,
    food: "Potatoes",
    recipe: `Bring water to a boil over high heat. 
    Reduce heat to medium and cook at rapid simmer until potatoes are easily pierced with a paring knife. 
    Wait for about 10 minutes for chopped potatoes and 20 minutes for whole potatoes. 
    Drain potatoes in a colander.`,
    src: "/Images/potatoes.jpeg",
  },
  {
    id: 4,
    food: "Spaghetti",
    recipe: `Put the pasta into plenty of boiling water. 
    Stir it, bring it to a simmer. 
    Turn the heat off, put a lid on and leave it to finish cooking for 10-12 mins.`,
    src: "/Images/spaghetti.jpeg",
  },
  {
    id: 5,
    food: "Fish",
    recipe: `Heat 1/4-inch oil or butter in a nonstick skillet over medium to medium-high heat.
    Fish may be dipped in milk or beaten egg and then breaded.
    Cook fish 4 to 5 minutes per side (per inch of thickness) or until done.`,
    src: "/Images/fish.jpeg",
  },
  {
    id: 6,
    food: "Chicken Breasts",
    recipe: `Chicken breasts must be at room temperature before going in the pan as cold chicken can cook unevenly and tends to be tough.
    Allow the chicken breast to sit out for 20 minutes.
    Preheat the pan for 2 minutes on medium-high heat
    Meanwhile, season the chicken breast with a generous pinch of salt and a few cracks of pepper on both sides
    You can use a spice rub if desired
    Add 2 teaspoons of oil to the pan, wait 30 seconds so the oil can heat up
    Place the boneless chicken breast in the pan and don’t touch it for 4 minutes
    You need to leave the chicken breast alone so the crust can form
    After 4 minutes, flip the chicken and let it cook another 3-4 minutes depending on how thick it is
    Remove the chicken breast from the pan and place on a clean plate and allow to rest for 3 minutes before slicing.`,
    src: "Images/chicken_breasts.jpeg",
  },
  {
    id: 7,
    food: "Beef",
    recipe: `Bring the steak up to room temperature(Remember to bring the beef out of the freezer 20-30 minutes before cooking it).
    Season the steak with salt & pepper
    Cook it on a high heat(A heavy pan or a cast iron skillet is recommended because the heat will be more evenly)
    Remove from the heat when it has cooked to your liking`,
    src: "Images/beef.jpeg",
  },
  {
    id: 8,
    food: "Green Grams",
    recipe: `Take about 250 grams of whole green-gram and soak in water for about 15 minutes
    Heat about 750 ml of water in a pressure cooker and add the soaked green-gram to the cooker
    Once the water starts boiling, cover the cooker with the lid and pressure cook for about 10 minutes.
    After 10 minutes, remove the cooker from stove and allow the pressure to come down
    Take one medium sized onion, remove dry skin and cut into pieces
    Take one inch long piece of ginger, remove skin and cut into pieces
    Shuck a handful of garlic cloves
    Add all these ingredients together in a mixer grinder and make a fine paste
    Transfer this paste in a bowl and keep aside
    Take three medium sized tomatoes and cut into pieces
    Add the cut tomato pieces in a mixer grinder
    One teaspoon of red chili powder
    One teaspoon of Cumin seed powder
    Half a teaspoon of turmeric powder
    Two teaspoons of dry coriander powder
    About 1/4 teaspoon of asafoetida powder
    Heat two tablespoon of oil in a frying pan
    Cut four or five green chilies in halves and add to the oil in the pan
    Add the onion-ginger-garlic paste to the pan and cook till raw smell disappears
    It is optional - You can add two to three pieces of cloves, a small piece of cinnamon and few pieces of star anise to the onion paste for added aroma.
    Now add the tomato-spice paste to the pan and cook over medium heat for about five minutes
    By this time the pressure in the cooker might have come down. You can add the cooked green-gram to the other ingredients in the pan and add salt to taste.
    Add little amount of water if required
    There is no need to cook further. Once all ingredients are blended together, you can remove the pan from the stove
    Garnish with chopped coriander leaves.`,
    src: "/Images/green_grams.jpeg",
  },
  {
    id: 9,
    food: "Scrambled Eggs",
    recipe: `Beat It. Beat your eggs until they're completely blended.
    Prep the Pan. Next, heat a nonstick skillet over a medium-low flame and toss in a pat of butter. 
    Add the Eggs. Then, pour in the eggs
    Allow to cook.`,
    src: "/Images/eggs.jpeg",
  },
  {
    id: 10,
    food: "French Beans",
    recipe: `Bring a large pot of water up to a boil.
    Season with salt liberally.
    Add beans and continue to boil for 2 to 5 minutes.
    To test doneness, use tongs to pull out one bean and rinse briefly under cool water.
    Drain the beans in a colander.`,
    src: "/Images/french_beans.jpeg",
  },
  {
    id: 11,
    food: "Soybeans",
    recipe: `soak them well. Recommended time is four hours but preferably overnight.
    When you're ready to cook them, drain the water and give the beans another quick rinse.
    Cook soybeans in a 1:3 ratio with water.
    Bring water to a simmer in a large pot.
    Add the soybeans, cover and simmer for about three hours or a little bit less if your soybeans are very fresh.
    Up to four hours may be needed to make sure your soybeans are fully cooked.`,
    src: "/Images/soybean.jpeg",
  },
  {
    id: 12,
    food: "Groundnuts",
    recipe: `Get your groundnut ready after removing the rotten ones out and salt it to your taste by wetting it with a little water. 
    Get your frying pot on a medium heat and allow it to heat up for about 3 minutes. 
    As it starts to roast, you will hear a pop sound and a changed in colouration from deep red to light brown.
    Pick out one of the nuts and peel to see if it is golden or brown in colour; if it is still white keep stirring till you get your desired colour and make sure you don’t allow it to become so brown because after it is being put off from the fire, the pan or pot will still be hot enough to cook the remaining completely while on the pot.
    Put off the heat  and leave for a while to cool while turning the nuts because the pan is hot and they can get burnt.
    Start peeling them by rolling the in your palms until all the skin is peel off. Allow wind or use your mouth to blow the peeled skins away. Then serve with tea or juice
    `,
    src: "/Images/groundnut.jpeg",
  },
  {
    id: 13,
    food: "Githeri",
    recipe: `Heat your sufuria on a medium heat and then add the vegetable oil followed by the onions and cook them until they just turn translucent.
    Add the ginger and garlic and cook for about a minute and then add the curry powder, which will cook for a minute to cook off the raw taste and aroma.
    Add pureed tomatoes and beef chilli cube, stir, cover and reduce heat to a low simmer. Cook for about 5minutes or until the mixture reduces and thickens.
    Add carrots and spring onions then simmer for a minute before adding the maize and beans.
    Add salt and freshly cracked pepper to taste.
    Cover and simmer for about 10 minutes for the sauce to thicken and all the flavors to come together.
    Finally, add the dhania and red hoho and simmer for just a minute. Turn off the heat and serve.
    `,
    src: "/Images/githeri.jpeg",
  },
  {
    id: 14,
    food: "Salad",
    recipe: `Pick One:
    2-3 cups dark leafy greens, like kale, spinach, arugula, or mustard greens 
    2-3 cups mixed greens, like mesclun or herb salad mix
    ½-1 cup shredded cabbage; mix with 1-2 cups of other greens

    Pick One or More:
    1 cup seasonal non-starchy veggies, like broccoli, bell peppers, mushrooms, carrots, tomato, or cucumber
    1/2 cup seasonal fruit, like berries, grapes, oranges, pears, or peaches
    1/2 cup pico de gallo
    1/4 cup high-flavor vegetables, like kimchi, pickle vegetables, olives, or onions
    2 tablespoons dried fruit
    1/4 avocado

    Pick One:
    1/2 cup beans or lentils
    3 ounces tofu or tempeh
    2 to 3 ounces grilled wild salmon, tuna, or chicken breast
    2 boiled or poached eggs
    1/4 cup shredded part-skim mozzarella or crumbled goat or feta cheese

    Pick One:
    1/2 cup cooked quinoa or brown rice
    1 whole grain bread roll or 1/2 whole grain pita
    1 small corn or whole-wheat tortilla
    1 ounce baked whole grain pita chips or baked tortilla chips

    Pick One:
    1/4 cup crispy baked edamame or chickpeas
    2 tablespoons pistachios, almonds, walnuts, pecans, peanuts, or pine nuts
    1 tablespoon sunflower, pumpkin, or sesame seeds

    Pick One:
    2 tablespoons balsamic vinaigrette or Italian vinaigrette
    2 tablespoons DIY vinaigrette (1 tablespoon lemon juice, lime juice, or vinegar of choice plus 1 tablespoon oil of choice or tahini)
    `,
    src: "/Images/salad.jpeg",
  },
  {
    id: 15,
    food: "Yoghurt",
    recipe: `Heat the milk to 180 degrees fahrenheit.
    Cool the milk to 112-115 degrees fahrenheit.
    Add your yogurt starter – the good bacteria.
    Stir the yogurt starter with the rest of the milk.
    Pour the milk into jars and incubate for 7-9 hours.
    Place the jars in the fridge to cool and set`,
    src: "/Images/yoghurt.jpeg",
  },
  {
    id: 16,
    food: "Cheese",
    recipe: `Heat & Acidify Milk. Begin by heating milk to 86F.
    Coagulate with Rennet. Once your milk and culture have ripened, add about 3/4 tsp of single strength liquid rennet.
    Cut Curd & Release Whey.
    Cook Curds.
    Draining & Cheddaring.
    Milling & Salting Curds.
    Forming & Pressing.
    Prepare for Aging.
    For more details visit https://cheesemaking.com/products/cheddar-cheese-making-recipe`,
    src: "/Images/cheese.jpeg",
  },
  {
    id: 17,
    food: "Fish Millet",
    recipe: `Pour 1 1/2 cups millet into a dry pan. Toast for about 2 to 3 minutes over medium heat, stirring frequently.
    Pour in 3 cups water and add a few pinches kosher salt. ...
    Fluff the millet with a fork, and add some salt to taste.
    To serve as a side, add a bit of olive oil or butter, and herbs or spices as desired`,
    src: "/Images/fish_millet.jpeg",
  },
  {
    id: 18,
    food: "Barley",
    recipe: `Bring 2 quarts of water to a boil in a pot with salt. 
    Add barley, return to a boil. 
    Reduce the heat to medium-high and boil uncovered until soft, 25–30 minutes. 
    Drain off cooking water, then serve.`,
    src: "Images/barley.jpeg",
  },
  {
    id: 19,
    food: "Sorghum",
    recipe: `Bring the water to a boil. 
    Reduce the heat to medium-low. 
    Let the sorghum simmer, covered, until the it is soft and still chewy, about one hour. 
    If, for some reason, the sorghum grains are still hard after all the water is absorbed. 
    Add another cup of water and continue cooking.`,
    src: "/Images/sorghum.jpeg",
  },
  {
    id: 20,
    food: "Sweet Potatoes",
    recipe: `Simply peel the sweet potato and cut into chunks. 
    Boil until tender – about 25 to 30 minutes. 
    Roast. 
    Cut unpeeled sweet potatoes into wedges, toss with olive oil and herbs, and roast at 375° F for 25 to 30 minutes, until tender.`,
    src: "/Images/sweet_potatoes.jpeg",
  },
  {
    id: 21,
    food: "Bread Crumps",
    recipe: `Grind down bread in the food processor.
    Spread in a single layer on a baking sheet.
    Bake at 300ºF (149ºC) for 10 minutes.
    Stir and bake until lightly toasted and dry.
    Completely cool down on the baking sheet.`,
    src: "/Images/bread.jpeg",
  },
  {
    id: 22,
    food: "Irish Potatoes with Liver",
    recipe: `Put oil in a pot and set on high heat. When it is hot, lightly fry your boiled potatoes and set aside. You can totally skip this stage if you are not a fan of fried food or you are trying to keep fit. Alternately, you could drizzle the potatoes with some (olive) oil and bake in an oven at 400 Degrees Fahrenheit for 10 minutes. Boiling/baking the potatoes improves taste and texture and prevents them from breaking when adding to other ingredients.
    2. Chop tomatoes and onions and fry in oil until tomato is no longer sour
    3. Add in your blended garlic and ginger and stir well. Let that fry in for about 2 minutes.
    4. Add in the chopped mixed vegetables and stir well.
    5. Season with salt and seasoning cubes.
    6. Add in liver with about a quarter cup of it's stock.
    7. Finally, add in your potatoes and give that a good stir, being careful not to break the potatoes. Turn off the heat and serve hot!`,
    src: "Images/irish_potatoes.jpeg",
  },
  {
    id: 23,
    food: "Chapati",
    recipe: `In a bowl, mix flour, sugar and salt. Add Margarine, mix with hands to form crumbs. I use a little bit of sugar in mine because I love the savoury taste. Omit it, if you don't like sugar.
    Make a well and pour water bit by bit as you knead. Knead for atleast 5 mins, if the dough is sticky, add flour bit by bit as you knead.
    Continue kneading on your work surface for another 3 mins. (FOR SOFT CHAPATIS, YOU SHOULD KNEAD THOROUGHLY)
    Finally dough should be firm but soft and not sticky. Cover with a damp cloth/ cling film/plastic polythene bag for 30 minutes.
    After 30mins, knead again and cut into balls.
    Roll out the balls in a circular shape with a rolling pin, one at a time and brush with oil, as shown in the pics.
    Roll the balls out again forming the circle.
    In a medium heat, place your skillet, let it warm up. Then put your chapati ontop. Fry both sides until brown. Once cooked remove and place it in a containee and cover.`,
    src: "Images/chapati.jpeg",
  },
  {
    id: 24,
    food: "Mandazi",
    recipe: `n a mixing bowl, combine the flour, baking powder, and the sugar.
    Mix the water and the vegetable oil. Gradually add this mixture to the flour while kneading into dough. Use additional water if necessary.
    Knead for about fifteen to twenty minutes until a smooth and elastic dough is formed.
    let dough rest for several minutes.
    Divide the entire dough into six equal round balls.
    Spread every ball onto a flat surface maintaining a circular shape of the dough.
    Cut the flattened dough into four equal quadrants.
    Repeat steps 6 and 7 until you spread and cut all the round balls.
    Place all of the dough quadrants in a cookie sheet. This will prevent the dough pieces sticking onto each other.`,
    src: "/Images/mandazi.jpeg",
  },
  {
    id: 25,
    food: "Maize Meal",
    recipe: `
    Bring the water and salt to a boil in a heavy-bottomed saucepan. Stir in the cornmeal slowly, letting it fall though the fingers of your hand.
    Reduce heat to medium-low and continue stirring regularly, smashing any lumps with a spoon, until the mush pulls away from the sides of the pot and becomes very thick, about 10 minutes. Remove from heat and allow to cool somewhat.
    Place the ugali into a large serving bowl. Wet your hands with water, form into a ball and serve.`,
    src: "/Images/ugali.jpeg",
  },
];
