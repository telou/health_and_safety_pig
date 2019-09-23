class PagesController < ApplicationController
  def home
    @term = Term.new
    @terms = Term.all
  end
end
