require 'rails_helper'

describe Api::V1::TermsController do


  # describe "GET #index" do
  #   it "returns all terms in the database"

  #   # it "renders them in a json"
  # end

  describe "POST #create" do
    context "with valid attributes" do
      it "saves the term in the database" do
        expect{
          Term.create(phrase: "Risk Assessment")
        }.to change(Term,:count).by(1)
      end
      it "translates the phrase given" do
        term = Term.create(phrase: "Risk Assessment")
        expect(term.translation).not_to be_nil
      end
      # it "renders the new term in a json"
    end
  end

  # describe "POST #create" do
  #   context "with invalid attributes" do
  #     it "does not save the term in the database" do
  #       expect{
  #         post :create, term: {phrase: "Hat"}
  #       }.not_to change(Term,:count)
  #     end
  #   end
  #     # it "renders a json with errors"
  # end

  # describe "DELETE #delete" do
  #   it "deletes the term from the database"
  #   it "returns a json"
  # end
end
