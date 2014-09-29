class RootController < ApplicationController
  def show
    @song = Song.new
    @songs = Song.all
  end
end