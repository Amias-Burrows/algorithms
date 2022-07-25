# Amias' Algorithms repo

To see these projects in action download the files and test them out yourself or visit [github.amias.dev/algorithms](https://github.amias.dev/algorithms).  Unless you just want to read the code then go ahead and look whenever.

All algorithms come with hardcoded items within the lists and are built as an object to keep the functions from intertwining.

## Using

To access the projects you can currently only use the browser console.  The `index.html` file includes the files in the code so you can open that and use the programs instantly.  If you're unsure how to do this here's a step by step after installing the files:

- Go to [github.amias.dev/algorithms](https://github.amias.dev/algorithms)
- Right click the page and navigate to **Developer Tools** or click f12
- Find `console` tab
- Use commands given in the relevant section below

## Commands

### Reversing Singly Linked List

The list object name is `list`

- To add element

        list.add([contents-of-current], [node-this-points-to (*null* for empty)]);

- To list nodes in list in order

        list.list();

- To reverse list

        list.reverse();

- To remove node	**(Not working)**

        list.remove([node-to-be-removed]);

### Bubble Sort

To print the list in it's current state use:

    bubble.print()

To sort the list with the normal Bubble Sort use:

    bubble.sort()

To sort the list with a more efficient Bubble Sort Method use:

    bubble.efficient_sort()

**Or** to automate the entire process use

    sort('bubble', [list-to-sort] **Optional**)

or

    sort('bubble_efficient', [list-to-sort] **Optional**)

### Binary Search

To list the items in the binary search list use `binary.print()'

To search for an item within the list use either:

`search(binary, [value-being-found]);`
or
`binary.search([value-being-found], 0, binary.list.length - 1)`
