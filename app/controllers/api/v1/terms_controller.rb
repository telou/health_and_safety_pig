class Api::V1::TermsController < ApplicationController

  def index
    term = Term.all
    render json: term
  end

  def create
    term = Term.new(term_params)
    term.translation = term.translate(term.phrase)
    term.save!
    if term
      render json: term
    else
      render json: term.errors
    end
  end

  def destroy
    puts "deleting"
    term = Term.find(params[:id])
    term.destroy
    render json: { message: params[:id] }
  end

  private

  def term_params
    params.require(:term).permit(:phrase)
  end

end
