class RootController < ApplicationController
  def show
    @song = Song.new
    @songs = Song.all.order(:created_at).reverse
  end
end