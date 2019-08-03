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
    {id: 1, name: 'Iron Man', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Iron-Man-icon.png', gender: 'Man', ability: 'Create special armors'},
    {id: 2, name: 'Captain America', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Captain-America-icon.png', gender: 'Man', ability: 'A man with a shield'},
    {id: 3, name: 'Hulk', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Hulk-icon.png', gender: 'Man', ability: 'Turn into giant green man'},
    {id: 4, name: 'Thor', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Thor-icon.png', gender: 'Man', ability: 'A god from Asgard'},
    {id: 5, name: 'Black Widow', avatarUrl: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Black-Widow-icon.png', gender: 'Woman', ability: 'Super martial art master'}
];