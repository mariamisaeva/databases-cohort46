1. What columns violate 1NF?

food_code & food_description
Because they contain multiple values.

2. What entities do you recognize that could be extracted?

- Member.
- Food.
- Dinner.
- Venue.

3. Name all the tables and columns that would make a 3NF compliant solution.

Tables:

- Member: member_id, member_name, member_address.

- Food : food_code, food_description.

- Dinner : dinner_id, dinner_date.

- Venue : venue_code, venue_description.

- Member_Dinner : member_id, dinner_id.
- Dinner_Food : dinner_id, food_code.
- Dinner_Venue : dinner_id, venue_code.
