class PagesController < ApplicationController
  def home
    @term = Term.new
  end
end
