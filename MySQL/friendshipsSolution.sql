 
-- 1.
select users.first_name, users.last_name,
users2.first_name as friend_first_name,
users2.last_name as friend_last_name
from users 
join friendships on
users.id = friendships.user_id
join users as users2 on
friendships.friend_id = users2.id
where  users.first_name = "Kermit" 
or users2.first_name = "Kermit";
-- 2. 
select count(friendships.id) from
friendships;

-- 3.
select first_name, max(friends_count) max_friends from 
(select users.first_name, users.last_name,
count(friendships.user_id) friends_count
from users 
join friendships on
users.id = friendships.user_id
group by (friendships.user_id)) max_f;

-- 4. 
insert into users (first_name, last_name)
values ("Yousef", "Nour");

insert into friendships (user_id, friend_id)
select users.id, users2.id from
users join users users2
where users.first_name = "yousef" 
and users2.first_name in ("Eli", "Kermit", "Marky");

-- 5. 
select concat(users.first_name, " ", users.last_name) as friend_name
from users join friendships
on users.id = friendships.friend_id
join users users2 on users2.id = friendships.user_id
where users2.first_name = "Eli"
order by friend_name;

-- 6. 
delete friendships
from friendships 
inner join users on
users.id = friendships.user_id 
inner join users users2 on
users2.id = friendships.friend_id
where users.first_name = "Eli"
and users2.first_name = "marky";

-- 7. 
select users.first_name, users.last_name,
users2.first_name as friend_first_name,
users2.last_name as friend_last_name
from users 
join friendships on
users.id = friendships.user_id
join users as users2 on
friendships.friend_id = users2.id;