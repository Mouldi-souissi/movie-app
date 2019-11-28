import React from "react";

const HOCLoader = isLoading => WrappedComponent => {
	class HOCLoader extends React.Component {
		render() {
			return this.props[isLoading] ? (
				<div className='loader'></div>
			) : (
				<WrappedComponent {...this.props} />
			);
		}
	}
	return HOCLoader;
};
export default HOCLoader;
