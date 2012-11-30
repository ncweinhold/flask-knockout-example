drop table if exists todos;
create table todos (
  id integer primary key autoincrement,
  title string not null,
  description string not null
);

insert into todos (title, description) values ("Create simple application", "Put together a simple application using Flask and Knockout.js");
insert into todos (title, description) values ("Demo simple application", "Demo the application to some top notch VCs in Silicon Valley");
insert into todos (title, description) values ("Buy ticket to tropical paradise", "Buy a first class ticket to a tropical paradise");
insert into todos (title, description) values ("Enjoy!", "Enjoy life!");
