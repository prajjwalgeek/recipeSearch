import React from 'react'
import Header from '../Header';
import Spinner from '../Spinner/Spinner';
import Card from '../Card';
import { connect } from 'react-redux';
import { getRecipe } from '../../redux/actions/recipeActions';


class Main extends React.Component {
    state = {
        recipes: [],
        loading: false,
        error: '',
        element: ''
    }
    componentDidMount() {
        this.props.getRecipe();
        this.setState({
            recipes: this.props.recipe,
            loading: this.props.loading,
        })
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.recipe !== prevState.recipes) {
            return {
                ...prevState,
                recipes: nextProps.recipe,
                loading: nextProps.loading
            }
        } else {
            return null;
        }
    }

    textChange = (e) => {
        this.setState({
            element: e.target.value
        })
    }

    submitForm = () => {
        this.props.getRecipe(this.state.element);
    }

    render() {
        let { recipes, loading, element } = this.state;
        return (
            <div>
                <Header text={element} textChange={this.textChange} submitForm={this.submitForm} category={this.props.category} />
                <div className="card-container">
                    {loading ? (
                        <Spinner />
                    ) : (
                            recipes.map((dish, index) => <Card key={index} dish={dish} />)
                        )}

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    recipe: state.recipe.recipes,
    loading: state.recipe.loading,
    error: state.recipe.error,
    category: state.recipe.element
})

export default connect(mapStateToProps, { getRecipe })(Main);

