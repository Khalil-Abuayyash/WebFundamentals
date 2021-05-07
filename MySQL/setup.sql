use twitter;
insert into users (first_name, last_name)
values ("khalil", "Abuayyash");
select * from tweets;
SET SQL_SAFE_UPDATES = 0;
update tweets set tweet = "Fora Bolsonaro!" 
where tweets.id = 3;
delete from tweets where tweets.id = 4;

