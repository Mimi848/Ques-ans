class QuestionsController < ApplicationController

  def index
    @question = Question.all
  end

  def new
    @question = Question.new
  end

  def create
    question = Question.new(question_params)
    question.save
    redirect_to root_path
  end

  def destroy
    @question = Question.find(params[:id])
    if @question.destroy
        flash[:success] = 'Question was successfully deleted.'
        redirect_to questions_url
    else
        flash[:error] = 'Something went wrong'
        redirect_to questions_url
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question.update_attributes(params[:question])
      flash[:success] = "Object was successfully updated"
      redirect_to @object
    else
      flash[:error] = "Something went wrong"
      render 'edit'
    end
  end

  def edit
    @question = Question.find(params[:id])
  end

  def show
    @question = Question.find(params[:id])
  end

  private

  def question_params
    params.require(:question).permit(:title, :formula, answers_attributes: [:id, :text, :value, :_destroy])
  end
end
