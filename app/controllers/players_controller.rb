class PlayersController < ApplicationController
  before_action :set_player, only: [:show, :update, :destroy, :add_skill]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_player, only: [:update, :destroy]

  # GET /players
  def index
    @players = Player.all

    render json: @players
  end

  # GET /players/1
  def show
    render json: @player, include: :skills
  end

  # POST /players
  def create
    @player = Player.new(player_params)
    @player.user = @current_user

    if @player.save
      render json: @player, status: :created, location: @player
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /players/1
  def update
    if @player.update(player_params)
      render json: @player
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  # DELETE /players/1
  def destroy
    @player.destroy
  end

  def add_skill
    @skill = Skill.find(params[:skill_id])
    @player.skills << @skill

 render json: @player, include: :skills
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player
      @player = Player.find(params[:id])
    end

    def set_user_player
      @player = @current_user.players.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def player_params
      params.require(:player).permit(:name, :img, :position, :user_id)
    end
end
