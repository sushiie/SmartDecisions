import React from "react";
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class SmartDecisionsApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options : prevState.options.filter((option) => optionToRemove !== option)
            }
        });
    };

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else  if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: null
        }));
    }

    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (options) {
            this.setState(() => ({options}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        try {
            if (prevState.options.length !== this.state.options.length) {
                const json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }

        } catch (e) {
            //do nothing 
        }

    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render () {
        const subtitle = 'Put your life in the hands of a computer!!!';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        );
    }
}