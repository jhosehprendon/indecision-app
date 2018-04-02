console.log('App.js is running');

var template = (
    <div>
        <p>Changed This is JSX</p>
        <ul>
            <li>Buy food</li>
            <li>Buy food</li>
        </ul>
        <form>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>    
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);