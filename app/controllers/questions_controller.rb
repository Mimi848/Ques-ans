class QuestionsController < ApplicationController

    def index
        @question = Question.all
    end
end