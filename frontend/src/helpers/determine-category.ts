const determineCategory = (category: string): [string, string] => {
    if (category === 'Programacion') {
        return ['bg-blue-300', 'text-blue-800']
    } else if (category === 'Vim' || category.toLowerCase() === 'neovim') {
        return ['bg-green-300', 'text-green-800']
    }
    else if (category === 'Desarrollo Web') {
        return ['bg-yellow-300', 'text-yellow-800']
    }
    else if (category === 'Trabajo') {
        return ['bg-red-300', 'text-red-800']
    }
    else if (category === 'Estudio') {
        return ['bg-purple-300', 'text-purple-800']
    }
    else if (category === 'Otros') {
        return ['bg-gray-300', 'text-gray-800']
    }
    else {
        return ['bg-gray-300', 'text-gray-800']
    }
}


export default determineCategory;
