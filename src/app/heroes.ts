export class Hero {
    constructor(
        public id: number,
        public name: string,
        public avatarUrl: string,
        public gender: string,
        public ability: string
    ){}
}
export const HEROES: Hero[] = [
    {id: 1, name: 'Iron Man', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Iron-Man-icon.png', gender: 'Man', ability: 'Create special armors'},
    {id: 2, name: 'Captain America', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Captain-America-icon.png', gender: 'Man', ability: 'A man with a shield'},
    {id: 3, name: 'Hulk', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Hulk-icon.png', gender: 'Man', ability: 'Turn into giant green man'},
    {id: 4, name: 'Thor', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Thor-icon.png', gender: 'Man', ability: 'A god from Asgard'},
    {id: 5, name: 'Black Widow', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Black-Widow-icon.png', gender: 'Woman', ability: 'Super martial art master'},
    {id: 6, name: 'War Machine', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-War-Machine-icon.png', gender: 'Man', ability: 'Iron Man Sidekick'},
    {id: 7, name: 'Agent Coulson', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Agent-Coulson-icon.png', gender: 'Man', ability: 'A SHIELD Agent'},
    {id: 8, name: 'Hawkeye', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Hawkeye-icon.png', gender: 'Man', ability: 'An archer'},
    {id: 9, name: 'Loki', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Loki-icon.png', gender: 'Man', ability: 'Thor\'s brother and a villain'},
    {id: 10, name: 'Giant Man', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Giant-Man-icon.png', gender: 'Man', ability: 'Turn to super small and super huge'},
    {id: 11, name: 'Nick Fury', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Nick-Fury-icon.png', gender: 'Man', ability: 'SHIELD\'s boss'}
];