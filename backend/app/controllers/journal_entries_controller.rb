class JournalEntriesController < ApplicationController

  before_action :current_entry, only[:show, :edit, :update, :destroy]

  def show
    render json: current_entry
  end

  def create
    journal_entry = current_user.JournalEntry.create(journal_entry_params)
  end

  def destroy
    entry = current_entry
    entry.destroy
  end

private

def current_entry
  current_user.JournalEntry.find(params[:id])
end

def journal_entries_params
    params.require(:journal_entry).permit(:title, :content, :user_id)
  end


end
