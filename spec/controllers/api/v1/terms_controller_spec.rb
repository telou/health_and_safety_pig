require 'rails_helper'

describe Api::V1::TermsController do
  describe "GET #index" do
    it "returns all terms in the database" do
      get :index
      expect(response.body).to eq Term.all.to_json
    end
  end

  describe "POST #create" do
    context "with valid attributes" do
      params = { phrase: "Risk Assessment" }
      it "saves the term in the database" do
        expect {
          post(:create, params: { term: params })
        }.to change(Term, :count).by(1)
      end
    end
  end

  describe "POST #create" do
    context "with invalid attributes" do
      it "does not save the term in the database" do
        expect {
          Term.create(phrase: "H")
        }.not_to change(Term, :count)
      end
    end
  end

  describe "DELETE #destroy" do
    term = Term.create(phrase: "Test test")
    it "delets a term from the database when user clicks delete" do
      expect {
        delete :destroy, params: { id: term.id }
      }.to change(Term, :count).by(-1)
    end
  end
end
