/**
 * Created by cwj on 2015/11/19.
 */

var React = require('react')

var LeftNav = React.createClass({
        render: function() {
            var nodes = this.props.data.map(function(comment) {
                return (
                    <div>
                        <span>{comment.name}</span>
                    </div>
                );
            });
        return (
            <div >
            {commentNodes}
            </div>
        );
    }
});

module.exports = LeftNav;
