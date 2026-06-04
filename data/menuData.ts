export interface MenuItem {
  name: string
  desc?: string
  price?: string
  variants?: { label: string; price: string }[]
}

export interface MenuSection {
  title: string
  subtitle?: string
  items: MenuItem[]
}

export interface MenuData {
  hours?: string
  note?: string
  subtitle?: string
  sections: MenuSection[]
}

export const dinnerMenu: MenuData = {
  hours: '4 PM - 12 AM, Monday - Sunday',
  note: '18% Gratuity is applied to groups of 6 or more',
  sections: [
    {
      title: 'Monthly Special',
      items: [
        { name: 'Beef Lasagna', desc: 'Ground Beef, Parmesan Cheese, Bechamel Sauce, Melted Mozzarella Cheese. Served with Garlic Bread', price: '$22.99' },
        { name: 'Smoked Salmon Alfredo Fettuccine', desc: 'Smoked Salmon, Alfredo, Peppers, Peas, Capers', price: '$25.99' },
      ],
    },
    {
      title: 'Spring Delights',
      items: [
        { name: 'Tomahawk Steak 45-55oz', desc: 'Mash Potatoes, Roasted Potatoes, Grilled Seasonal Veggies, Side of Salad, Chimichurri, Roasted Garlic topped off with House Special Tiramisu and Classic Crème Brûlée', price: '$250' },
        { name: 'Gnocchi Chicken Soup', desc: 'Gnocchi Pasta, Celery, Carrots, Garlic, Chicken, Chicken Stock, Fresh Cream', price: '$8.99' },
        { name: 'Tiramisu', desc: 'Mascarpone Cheese, Cocoa Powder, Dipped in Fresh Blended Coffee', price: '$11' },
        { name: 'Latte – Caramel', price: '$7.49' },
        { name: 'Latte – Vanilla', price: '$7.49' },
        { name: 'Latte – Regular', price: '$6.99' },
      ],
    },
    {
      title: 'Soup & Salad',
      items: [
        { name: '19 B Soup', desc: 'Chicken, Prawn, Mushrooms, Egg, Spring Onion', price: '$10' },
        { name: 'Gnocchi Chicken Soup', desc: 'Gnocchi Pasta, Celery, Carrots, Garlic, Chicken, Chicken Stock, Fresh Cream', price: '$8.99' },
        { name: 'Santa Fe Chicken Salad', desc: 'Grilled Chicken, Beans, Lettuce, Bell Pepper, Corn, Avocado, Guacamole', price: '$18' },
        { name: 'Caesar Salad', desc: 'Grilled Chicken, Parmesan Cheese, Croutons, Roma Lettuce, Anchovy Sauce', price: '$17' },
        { name: 'Greek Salad', desc: 'Olives, Cucumbers, Mix Bell Peppers, Feta Cheese', price: '$13' },
      ],
    },
    {
      title: 'Appetizers',
      items: [
        { name: 'Louisiana Garlic Prawns', desc: '5 Pcs Prawns Served with Garlic Bread', price: '$16.99' },
        { name: 'Coconut Prawns', desc: '5 Pcs Prawns coated with Shredded Coconut. Served with Strawberry Sauce Salad', price: '$16.99' },
        { name: 'Brisket Taco', desc: 'Soft-Shelled Smoke Brisket, Strawberry Sauce Salad', price: '$23' },
        { name: 'Warm Three Cheese Spinach Dip', desc: 'Artichokes, Garlic, Spinach, Feta Cheese, Mozzarella, Cream Cheese', price: '$18' },
        { name: 'Chicken Mini Burger Sliders', desc: 'Chicken Patty, Pickle, Lettuce, Spicy Mayo', price: '$17' },
        { name: 'Fish Taco', desc: 'Fried Basa Fish, Avocado Salsa, Drizzle of Spicy Mayo', price: '$17' },
        { name: 'Thai Chicken Bites', desc: 'Pan-fried Crispy Chicken tossed in Sweet Chili Sauce. Garnished with Pickled matchstick Carrots, Sesame seeds', price: '$15.99' },
        { name: 'Truffle Fries', desc: 'Black Pepper, Truffle Aioli, Grana Padano', price: '$12' },
        { name: 'Yam Fries', desc: 'Sweet Potatoes served with Spicy Mayo and Ketchup', price: '$11.50' },
        { name: 'French Fries', desc: 'Crispy Fries served with Spicy Mayo and Ketchup', price: '$9.99' },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Smoked Salmon Alfredo Fettuccine', desc: 'Smoked Salmon, Alfredo, Peppers, Peas, Capers', price: '$25.99' },
        { name: 'Beef Lasagna', desc: 'Ground Beef, Parmesan Cheese, Bechamel Sauce, Melted Mozzarella Cheese. Served with Garlic Bread', price: '$22.99' },
        { name: 'Lamb Shoulder', desc: 'Braised Lamb Shoulder served with Yukon Potatoes and Seasonal Veggies on the side', price: '$32.99' },
        { name: 'Roasted 1/2 BBQ Chicken', desc: 'Served with Roasted Potatoes and Seasonal Veggies', price: '$27.99' },
        { name: '1/2 lb Brisket', desc: '16 hours Smoked Grass-fed Beef, BBQ Sauce, Jus, Chimichurri', price: '$35.50' },
        { name: 'Quesabirria Brisket Taco', desc: '2 pieces of Pan-fried Tacos filled with 16 hrs Smoked Brisket and Cheese', price: '$25' },
        { name: 'Smoke Brisket Sandwich', desc: '16 hours Smoked Beef, Jus', price: '$23' },
        { name: 'Salt & Steak Signature Beef Burger', desc: 'House-made ground beef patty served with sides', price: '$22' },
        { name: 'Hot Fried Chicken Burger', desc: 'Louisiana Style, Pickle', price: '$21' },
        { name: 'Prawn & Chicken Alfredo Fettuccine', desc: 'Sliced Grill Chicken, Prawn & Mushrooms', price: '$30' },
        { name: 'Prawn Alfredo Fettuccine', desc: 'Prawn, Alfredo (Veg Option Available)', price: '$28' },
        { name: 'Chicken Alfredo Fettuccine', desc: 'Sliced Grilled Chicken, Alfredo (Veg Option Available)', price: '$24' },
        { name: 'Spaghetti Bolognese', desc: 'Grass-fed Ground Beef, Tomato sauce, Carrot, Garlic', price: '$24' },
        { name: 'Penne Pasta', desc: 'Penne, Tomato, Carrot', price: '$21' },
        { name: 'Hot Fried Chicken Tenders & Waffles', desc: 'Waffle, Fried Chicken, Sour Cream, Louisiana Style', price: '$20' },
      ],
    },
    {
      title: 'Steaks',
      subtitle: 'Grass-fed locally sourced. Choose your rareness.',
      items: [
        { name: 'Rib eye Steak 12-14oz', desc: 'Small portion of Mash Potatoes, Seasonal Veggies', price: '$60' },
        { name: 'Tenderloin Steak 8-10oz', desc: 'Small portion of Mash Potatoes, Seasonal Veggies', price: '$65' },
        { name: 'T Bone Steak 18-20oz', desc: 'Small portion of Mash Potatoes, Seasonal Veggies', price: '$65' },
        { name: 'New York Steak 10-12oz', desc: 'Small portion of Mash Potatoes, Seasonal Veggies', price: '$48' },
        { name: 'Tomahawk Steak 45-55oz', desc: 'Mash Potatoes, Roasted Potatoes, Grilled Seasonal Veggies, Side of Salad, Chimichurri, Roasted Garlic topped off with House Special Tiramisu and Classic Crème Brûlée', price: '$250' },
      ],
    },
    {
      title: 'Dessert',
      items: [
        { name: 'Classic Crème Brûlée', desc: 'Caramelized Crust, Crème Custard', price: '$14' },
        { name: 'Chocolate Peanut Butter Mousse Cake', desc: 'Oreo Crumb Crust, Peanut Butter, Chocolate Ganache', price: '$16' },
        { name: 'New York Style Cheese Cake', desc: 'Rich and Creamy, Graham Cracker Crust', price: '$13' },
        { name: 'Seven Layer Chocolate Cake', desc: 'Rich, Multi-layered Chocolate Cake, Chocolate frosting, Chocolate Pearls Sprinkles', price: '$14' },
        { name: 'Chocolate Brownie Explosion', desc: 'Chocolate Fudge Brown with Ice Cream', price: '$16' },
        { name: 'Chocolate Lava Cake', desc: 'Molten Chocolate Lava Cake served with Ice Cream', price: '$12' },
        { name: 'Tiramisu', desc: 'Mascarpone Cheese, Cocoa Powder, Dipped in Fresh Blended Coffee', price: '$11' },
      ],
    },
    {
      title: 'Sides',
      items: [
        { name: 'Side of Mash Potatoes', desc: 'Mixed with Butter, Cream, and Seasoning', price: '$4' },
        { name: 'Side of Yam Fries', desc: 'Crisp Sweet Potato Fries, seasoned with Salt and Pepper', price: '$6' },
        { name: 'Side of Onion Rings', desc: 'Thick Onion Slices, Lightly battered and Deep-fried', price: '$5' },
        { name: 'Side of French Fries', desc: 'Crispy Golden Fries', price: '$5' },
        { name: 'Side of Rice', desc: 'Mandi Rice', price: '$5' },
      ],
    },
  ],
}

export const happyHourMenu: MenuData = {
  hours: 'Monday - Friday (9 PM to 11 PM)',
  sections: [
    {
      title: 'Food & Desserts',
      items: [
        { name: '19 B Soup', price: '$8' },
        { name: 'Greek Salad', price: '$10' },
        { name: 'Caesar Salad', price: '$14' },
        { name: 'Santa Fe Chicken Salad', price: '$15' },
        { name: 'Truffle Fries', price: '$10' },
        { name: 'Warm Three Cheese Spinach Dip', price: '$15' },
        { name: 'Fish Taco', price: '$12' },
        { name: 'Penne Pasta', price: '$17' },
        { name: 'Salt & Steak Signature Beef Burger', price: '$18' },
        { name: 'Hot Fried Chicken Burger', price: '$18' },
        { name: 'Lamb Shoulder', price: '$28' },
        { name: 'New York Steak', price: '$35' },
        { name: 'Classic Crème Brûlée', price: '$11' },
        { name: 'Chocolate Peanut Butter Mousse Cake', price: '$13' },
        { name: 'Tiramisu', price: '$9.50' },
      ],
    },
    {
      title: 'Drinks',
      items: [
        { name: 'Hazelnut Dream', price: '$7' },
        { name: 'Cherry Blossom Royale', price: '$8' },
        { name: 'Lavender Berrylicious', price: '$8' },
        { name: 'Grapefruit Grove', price: '$8' },
        { name: 'Sparkling Serenity', price: '$8' },
        { name: 'Enigma Elixir', price: '$9' },
        { name: 'Kiwi Mojito', price: '$9' },
        { name: 'Moon Lit Espresso', price: '$9' },
        { name: 'Moon Tide', price: '$10' },
        { name: 'Passionflower Fusion', price: '$10' },
        { name: 'Blissful Blue', price: '$10' },
        { name: 'Salt & Steak Watermelon Bliss', price: '$10' },
        { name: 'Orange', price: '$11' },
        { name: '24K Gold Espresso', price: '$6' },
      ],
    },
  ],
}

export const drinksMenu: MenuData = {
  hours: 'Available Monday - Sunday',
  sections: [
    {
      title: 'Fresh Cold Press Juices',
      items: [
        { name: 'Orange', desc: 'Freshly squeezed juice made from oranges', price: '$13' },
        { name: 'Energizer', desc: 'Carrot, Green Apple, Orange', price: '$15' },
        { name: 'Detox', desc: 'Cucumber, Lemon, Green Apple', price: '$15' },
        { name: 'Chill Chug', desc: 'Cucumber, Ginger, Green Apple', price: '$15' },
      ],
    },
    {
      title: 'Mocktails',
      items: [
        { name: 'Dragon Lagoon', desc: 'Dragon Fruit, Coconut, Pineapple, Orange, Lemon', price: '$12.99' },
        { name: 'Salt & Steak Watermelon Bliss', desc: 'Fresh Watermelon and Lemon Juice', price: '$12' },
        { name: 'Lavender Berrylicious', desc: 'Lavender, Lime, Mix Berry', price: '$10' },
        { name: 'Moon Tide', desc: 'Rose, Coconut, Pineapple, Lime', price: '$12' },
        { name: 'Passionflower Fusion', desc: 'Passion Fruit, Elder Flower, Butterfly Pea', price: '$12.50' },
        { name: 'Blissful Blue', desc: 'Coconut Cream, Mint, Pineapple Juice', price: '$12' },
        { name: 'Fruity Fiesta Sangria', desc: 'Orange, Mango, Pineapple, Mint, Lime, Non-Alcoholic Red Wine', price: '$13' },
        { name: 'Enigma Elixir', desc: 'Blue Curacao, Vanilla Ice Cream, Orange, Mango, Pineapple', price: '$11' },
        { name: 'Hazelnut Dream', desc: 'Whipping Cream, Hazelnut, Blue Curacao, Orange', price: '$9.50' },
        { name: 'Blaze Berry Blast (BBB)', desc: 'Mix Berries, Mint, Lemon', price: '$11.50' },
        { name: 'Cherry Blossom Royale', desc: 'Lychee, Cherry, Lime', price: '$10' },
        { name: 'Love Potion', desc: 'Lychee, Mint, Lime, Grenadine', price: '$10' },
        { name: 'Strawberry Mint Mojito', desc: 'Strawberry, Mint, Lemon', price: '$10.99' },
        { name: 'Kiwi Mojito', desc: 'Kiwi, Mint, Lemon', price: '$10.99' },
        { name: 'Mango Mojito', desc: 'Mango Pulp, Mint, Lime, Lemon', price: '$10.99' },
        { name: 'Moon Lit Espresso', desc: 'Espresso shot, French Vanilla, Italian Roast', price: '$11' },
        { name: 'Grapefruit Grove', desc: 'Strawberry, Grapefruit Juice, Lime', price: '$10' },
        { name: 'Caramel Ice Coffee', desc: 'Espresso, Caramel, Whipped Cream', price: '$11' },
        { name: 'Sparkling Serenity', desc: 'Orange Juice, Non-Alcoholic Sparkling Rose Wine, Grenadine', price: '$10' },
      ],
    },
    {
      title: 'Non-Alcoholic Beverages',
      items: [
        { name: 'Non-Alcoholic Red Wine – 5 oz', desc: 'JP. Chenet, Alcohol-Free', price: '$7.99' },
        { name: 'Non-Alcoholic Red Wine – 8 oz', desc: 'JP. Chenet, Alcohol-Free', price: '$12.99' },
        { name: 'Non-Alcoholic Red Wine – Full Bottle 25 oz', desc: 'JP. Chenet, Alcohol-Free', price: '$39.99' },
        { name: 'Heineken Beer 0%', price: '$5.99' },
        { name: 'Corona Beer 0%', price: '$5.99' },
        { name: 'PC Pop', desc: 'PC Cola, PC Diet Cola, PC Spritz Up, PC Gingerale', price: '$3.50' },
        { name: 'Sparkling Water (Perrier 330ml)', price: '$3.00' },
      ],
    },
    {
      title: 'Hot Drinks',
      items: [
        { name: '24K Gold Espresso', price: '$7.99' },
        { name: 'Cappuccino', price: '$6.99' },
        { name: 'Latte – Caramel', price: '$7.49' },
        { name: 'Latte – Vanilla', price: '$7.49' },
        { name: 'Latte – Regular', price: '$6.99' },
        { name: 'English Tea', desc: 'Served with Steamed Milk', price: '$5.99' },
        { name: 'Hibiscus Tea', desc: 'Organic', price: '$3.99' },
        { name: 'Black Coffee', price: '$3.99' },
        { name: 'Green Tea', price: '$2.99' },
        { name: 'Black Tea', price: '$2.99' },
      ],
    },
  ],
}

export const brunchMenu: MenuData = {
  hours: '12 PM - 4 PM, Saturday & Sunday',
  note: '18% Gratuity is applied to groups of 6 or more',
  sections: [
    {
      title: 'Salad & Soups',
      items: [
        { name: 'Santa Fe Chicken Salad', desc: 'Grilled Chicken, Beans, Lettuce, Bell Pepper, Corn, Avocado, Guacamole', price: '$18' },
        { name: 'Caesar Salad', desc: 'Grilled chicken, Parmesan cheese, Croutons, Roma lettuce, Anchovy Sauce', price: '$17' },
        { name: 'Greek Salad', desc: 'Olives, Cucumbers, Mix Bell Peppers, Feta Cheese', price: '$13' },
        { name: '19 B Soup', desc: 'Chicken, Prawn, Mushrooms, Egg, Spring Onion', price: '$10' },
        { name: 'Gnocchi Chicken Soup', desc: 'Gnocchi Pasta, Celery, Carrots, Garlic, Chicken, Chicken Stock, Fresh Cream', price: '$8.99' },
      ],
    },
    {
      title: 'Benedicts',
      subtitle: 'Served with Shredded Hashbrowns',
      items: [
        { name: 'Smoke Brisket Egg Benedict', desc: 'Hollandaise, Sliced Smoke Briskets, Poached Eggs', price: '$18' },
        { name: 'Turkey Bacon Egg Benedict', desc: 'Hollandaise, Turkey Bacon, Poached Eggs', price: '$18' },
        { name: 'Avocado Egg Benedict', desc: 'Hollandaise, Avocado, Poached Eggs', price: '$17' },
      ],
    },
    {
      title: 'Omelettes',
      subtitle: 'All Omelettes served with in-house Strawberry jam, Marmalade, Butter, Fruits and Toast',
      items: [
        { name: 'Salt & Steak Omelette', desc: 'Steak, Onion, Cheese, Roasted Red Peppers', price: '$18' },
        { name: 'Smoke Brisket Omelette', desc: 'Smoke Brisket Shredded, Cheese, Mushrooms', price: '$17.50' },
        { name: 'Chicken Fajita Omelette', desc: 'Grilled Chicken, Tomatoes, Green Peppers Mushrooms, Jalapeno', price: '$17' },
        { name: 'Spinach & Mushroom Omelette', desc: 'Spinach, Mushroom, Green Onion, Cheese, Roasted Red Peppers', price: '$16' },
      ],
    },
    {
      title: 'Eggs',
      subtitle: 'Served with Shredded Hashbrowns',
      items: [
        { name: '1/2 lb Smoke Brisket and Eggs', desc: 'Smoke Brisket, Sunny Side Eggs', price: '$36' },
        { name: 'Bacon Eggs & Pancakes', desc: 'Pancakes, Turkey Bacon and Sunny Side Eggs', price: '$18' },
        { name: 'Classic Smoke Sausages & Egg Sampler', desc: 'Smoke Sausage, Turkey Bacon and Sunny Side Eggs', price: '$17' },
        { name: 'Waffles & Eggs', desc: 'Waffle with Sunny Side Eggs', price: '$15' },
      ],
    },
    {
      title: 'Burgers & Chill',
      subtitle: 'Shredded Hashbrowns served with selective menu items',
      items: [
        { name: 'Double Decker Smash Beef Burger', desc: 'Double Smash Beef Patties, Tomato, Crispy Onion, Cheese, Jus', price: '$23' },
        { name: 'Big Brunch Burger', desc: 'Beef Patty, Smoke Turkey Bacon and Sunny Side', price: '$22' },
        { name: 'Mushroom & Egg Beef Burger', desc: 'Beef Patty, Mushroom and Sunny Side', price: '$22' },
        { name: 'Quesabirria Brisket Taco', desc: '2 pieces of Pan-fried Tacos filled with 16 hrs Smoked Brisket and Cheese', price: '$25' },
        { name: 'Hot Fried Chicken Tenders & Waffles', desc: 'Waffle, Fried Chicken, Sour Cream, Louisiana Style', price: '$20' },
        { name: 'Classic Fish & Chips', desc: 'Cod Fried Fish', price: '$19' },
        { name: 'Pesto Chicken Quesadilla', desc: 'Chicken, Pesto, Cranberries', price: '$18' },
        { name: 'Louisiana Garlic Prawns', desc: '5 Pcs Prawns Served with Garlic Bread', price: '$16.99' },
        { name: 'Coconut Prawns', desc: '5 Pcs Prawns coated with Shredded Coconut. Served with Strawberry Sauce Salad', price: '$16.99' },
      ],
    },
    {
      title: 'Shareables',
      items: [
        { name: 'Salt & Steak Nachos', desc: 'Ground Beef, Beans, Corn, Jalapenos, Cheese', price: '$27' },
        { name: 'Cheesy Mozzarella Sticks', desc: 'Mozzarella cheese, Cheetos', price: '$17' },
      ],
    },
    {
      title: 'Sweet & Toasty',
      items: [
        { name: 'Salt & Steak French Toast', price: '$14' },
        { name: 'Butter Milk Pancake', price: '$11' },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Classic Crème Brûlée', desc: 'Caramelized Crust, Crème Custard', price: '$14' },
        { name: 'Chocolate Peanut Butter Mousse Cake', desc: 'Oreo Crumb Crust, Peanut Butter, Chocolate Ganache', price: '$16' },
        { name: 'Chocolate Brownie Explosion', desc: 'Chocolate Fudge Brown with Ice Cream', price: '$16' },
        { name: 'New York Style Cheese Cake', desc: 'Rich and Creamy, Graham Cracker Crust', price: '$13' },
        { name: 'Seven Layer Chocolate Cake', desc: 'Rich, Multi-layered Chocolate Cake, Chocolate frosting', price: '$14' },
        { name: 'Chocolate Lava Cake', desc: 'Molten Chocolate Lava Cake served with Ice Cream', price: '$12' },
        { name: 'Tiramisu', desc: 'Mascarpone Cheese, Cocoa Powder, Dipped in Fresh Blended Coffee', price: '$11' },
      ],
    },
  ],
}

export const signatureExclusives: MenuData = {
  subtitle: "Our Kitchen's most premium creations, crafted to impress",
  sections: [
    {
      title: 'Mandi Specials',
      items: [
        { name: 'Roast Lamb Mandi', desc: 'Tender, fall-off-the-bone Lamb Mandi served over fragrant rice, paired with fresh salad and Yemeni hot sauce', price: '$32.99' },
        {
          name: 'Roast Chicken Mandi',
          desc: 'Tender, fall-off-the-bone Chicken Mandi served in four different variations',
          variants: [
            { label: 'Chicken Leg', price: '$15.99' },
            { label: 'Chicken Breast', price: '$20.99' },
            { label: 'Half Chicken', price: '$29.99' },
            { label: 'Whole Chicken', price: '$56.99' },
          ],
        },
        { name: '⭐ Mix Mandi Platter for 2', desc: 'Juicy Roasted Mandi Lamb & Tender Roasted Mandi Chicken Leg or Breast with fragrant rice, Salad, Yemeni hot sauce — topped off with a classic New York Style Cheese Cake or Tiramisu', price: '$62.99' },
        { name: 'Mix Mandi Platter for 3', desc: 'Juicy Roasted Mandi Lamb & Tender Roasted Mandi Half Chicken with fragrant rice, Salad, Yemeni hot sauce — topped off with New York Style Cheese Cake / Tiramisu and Classic Crème Brûlée', price: '$83.99' },
      ],
    },
  ],
}
