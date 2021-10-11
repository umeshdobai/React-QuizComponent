import React,{Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component{
    constructor(props){
        super(props)
        this.state = {
            incorrectAnswer : false
        }

    }
    handleClick (buttonText) {
        if(buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler()
            this.setState({incorrectAnswer : false})
        }else{
            this.setState({incorrectAnswer : true})
        }

    }
    render(){
        
        return(
            <main>
        <section>
        <p>{this.props.quiz_question.instruction_text}</p>
        {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p>: null}
        </section>
        <section className="but tons">
          <ul>
            {
                this.props.quiz_question.answer_options.map((answer_option ,index)=> {
                    return <QuizQuestionButton clickHandler={this.handleClick.bind(this)} button_text={answer_option} key={index} />
                })
            }
          </ul>
        </section>
      </main>
        )
    }
}

export default QuizQuestion;