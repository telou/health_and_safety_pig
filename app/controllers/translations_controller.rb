class TranslationsController < ApplicationController
  before_action :set_translation, only: :destroy

  def destroy
    @translation.destroy
  end

  private

  def set_translation
    @translation = Translation.find(params[:id])
  end
end
