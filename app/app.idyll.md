[meta title:"Idyll Template" description:"Short description of your project" /]

[Header
  title:"Idyll Template"
  subtitle:"Welcome to Idyll. Open app/app.idyll.md to start writing"
  author:"IHME"
  authorLink:"http://www.healthdata.org/results/data-visualizations" /]

This is an [Idyll](https://idyll-lang.org/) file. Write text
as you please in here. To add interactivity,
you can add  different idyllComponents to the text.


Here is how you can use a variable:

[var name:"exampleVar" value:20 /]

[Range min:10 max:50 value:exampleVar /]
[Display value:exampleVar /]

```
[var name:"exampleVar" value:20 /]

[Range min:10 max:50 value:exampleVar /]
[Display value:exampleVar /]
```

### Custom Components

[CustomComponent /]

You can use standard html tags if a
component with the same name
doesn't exist.

* *markdown* syntax is supported.

### Fetching and referring to data (in this project)
Data must be added to the array returned
by `app/data/dataFetches.js`. Static data files can be added to
`app/data/static_data_files` and parsed as shown below. Each object's
value should be a Promise that resolves to data in a format
specific to each chart.

`app/data/dataFetches.js`:

```
export default async () => {
  const { PATH_TO_DIST_DATA = 'dist/data/' } = config;
  return [
    { myData: await json(`${PATH_TO_DIST_DATA}/example-data.json`) },
    { otherData: await csv(`${PATH_TO_DIST_DATA}/csv-data.csv`) },
  ];
};
```

Each object's key corresponds to the `[data name:...]` field in
Idyll Markup, so use the data in the Idyll story you must declare
it as a data variable.

```
[data name:'myData' /] // declare the data variable as 'myData'
```

[data name:'myData' /]

### Built in Idyll Components:

Here's a table component that renders `myData`.  `Table` is a built-in Idyll component.
Other built-in Idyll components [can be found here](https://idyll-lang.org/docs/components)

```
[Table data:myData /]
```

[Table data:myData /]


This is the built-in [Chart](https://idyll-lang.org/docs/components/default/chart)
component that renders `myData`. Chart gives access to most of the basic [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart types:

```
[Chart type:"area" data:myData domain:`[0, 2]` range:`[0, 2]` /]
```

[Chart type:"area" data:myData domain:`[0, 2]` range:`[0, 2]` /]


### Static files can be added to `app/resources/`
`app/resources` gets copied to `dist/resources`, so refer to static resources like this:

```
[img
  src:'dist/resources/images/quill.svg'
  style:`{ width: 75, display: 'block', margin: '30px auto' }`
  /]
```

[img
  src:'dist/resources/images/quill.svg'
  style:`{ width: 75, display: 'block', margin: '30px auto' }`
  /]

[Fixed]

### Custom D3 Components

This is a custom D3 component.
See `app/components/custom_d3_component`.

[FullWidth]

```
[var name:"state" value:0 /]
[CustomD3Component
    className:"d3-component"
    radius:exampleVar
    state:state
/]
[button
    onClick:`state++`
]
    Click Me.
[/button]
```
[/FullWidth]

[var name:"state" value:0 /]
[CustomD3Component className:"d3-component" state:state radius:exampleVar /]
[button onClick:`state++`] Click Me. [/button]

[/Fixed]
